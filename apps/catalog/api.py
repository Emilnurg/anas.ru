# -*- coding: utf-8 -*-
from catalog.models import ProductCategory

PRODUCT_CATEGORY_LEFT_ATTR = ProductCategory._mptt_meta.left_attr
PRODUCT_CATEGORY_RIGHT_ATTR = ProductCategory._mptt_meta.right_attr
PRODUCT_CATEGORY_TREE_ATTR = ProductCategory._mptt_meta.tree_id_attr
PRODUCT_CATEGORY_LEVEL_ATTR = ProductCategory._mptt_meta.level_attr


def get_categories_tree():
    """Извлекает MPTT-дерево категорий продуктов для вывода на сайте"""
    qs = ProductCategory.objects.published()\
        .order_by(PRODUCT_CATEGORY_TREE_ATTR, PRODUCT_CATEGORY_LEFT_ATTR)

    # получаем ветви оргструктуры текущего пользователя
    current_path = []
    root_nodes = []
    root_level = root_lft = None

    for obj in qs.iterator():
        node_level = obj.get_level()
        if root_level is None:
            root_level = node_level

        curr_lft = getattr(obj, PRODUCT_CATEGORY_LEFT_ATTR)
        if root_lft is None:
            root_lft = curr_lft
        else:
            # если это не первый элемент (который очевидно корневой)
            # и при этом левый показатель меньше, то есть новый (2й и более) корень:
            if node_level == 0 and root_lft < curr_lft:
                root_level = node_level
                root_lft = curr_lft
                current_path = []

        obj = {
            'children': [],
            'obj': obj
        }

        # Remove nodes not in the current branch
        while current_path and len(current_path) > node_level - root_level:
            current_path.pop(-1)

        if node_level == root_level:
            # Add the root to the list of top nodes, which will be returned
            root_nodes.append(obj)
        else:
            # Cache the parent on the current node, and attach the current
            # node to the parent's list of children
            current_path[-1]['children'].append(obj)

        # Add the current node to end of the current path - the last node
        # in the current path is the parent for the next iteration, unless
        # the next iteration is higher up the tree (a new branch), in which
        # case the paths below it (e.g., this one) will be removed from the
        # current path during the next iteration
        current_path.append(obj)

    return root_nodes

### Правила проектирования ###
1. Транзакциями оборачивать вызовы только внутри view или celery task. В API, чтобы не было путаницы и вложенных транзакций.
2. Соблюдать PEP8. Проверка на PEP8:
<code>flake8</code>

### Обновление пакетов ###
1. Устанавливаем pip-tools (https://github.com/nvie/pip-tools)
<code>pip install pip-tools</code>
2. Обновляем версии пакетов в docs/requirements/base.in
3. Запускаем <code>pip-compile docs/requirements/base.in</code>
При этом обновляется файл docs/requirements/base.txt
4. Запускаем
<code>pip-sync docs/requirements/base.txt</code>
или просто делаем
<code>pip install -r docs/requirements/base.txt</code>

### Обновление задач cron ###
* Если необходимо добавить задачи для конкретного сервера, кладем их в файл <code>docs/cron/SERVER_USER.txt</code>
* Если необходимо для какого-то проекта полностью заменить задачи на свои, то кладем их в файл <code>docs/cron/clear_SERVER_USER.txt</code>
* При деплое через **bamboo** или  команду **repoup** задачи в крон будут заменены по описанной выше логике
* Не забываем оставлять пустую строку в конце файла, иначе он не применится

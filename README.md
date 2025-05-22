# Проект: Тестовое задание с Api от Twelvedata

## Описание

Этот проект включает фронтенд-приложение, которое запускается с помощью Docker.  
Для корректной работы необходимо создать файл `.env` с переменными окружения, а затем собрать и запустить контейнеры через Docker Compose.

## Установка и запуск

1. **Клонировать репозиторий:**

    ```bash
    git clone https://github.com/TohaLike/trade-app.git
    cd trade-app
    ```

2. **Создать файл `.env`:**

    В корне проекта создайте файл `.env` и добавьте в него следующие переменные:

    ```env
    NEXT_PUBLIC_TWELVEDATA_URL="https://api.twelvedata.com"
    NEXT_PUBLIC_TWELVEDATA_API="ваш_api_ключ_от_twelvedata"
    ```

3. **Собрать и запустить контейнеры:**

    ```bash
    docker-compose up --build
    ```

    Эта команда соберет и запустит все сервисы, указанные в `docker-compose.yml`.

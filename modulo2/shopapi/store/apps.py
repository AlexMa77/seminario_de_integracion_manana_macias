<<<<<<< HEAD
# store/apps.py
=======
>>>>>>> 5881d08ee29c6ac8c3e90a8abb337f45ea580dd9
from django.apps import AppConfig


class StoreConfig(AppConfig):
    name = 'store'
<<<<<<< HEAD

    def ready(self):
        import store.signals  # noqa: F401
=======
>>>>>>> 5881d08ee29c6ac8c3e90a8abb337f45ea580dd9

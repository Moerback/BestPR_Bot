var config = {};

// Администраторы бота:
config.admin_list = [645079503] // ID админов бота
config.admin_username = '@Moerback'; // Юзернейм админа (рекламного менеджера)

// Системные параметры бота:
config.proxy = null; // Прокси для соединения с серверами Telegram http://HohrVp:6H8BY2@81.4.108.157:35357
config.qiwi = '6f16bbb37f904d5de3821551d558e4b6'; // API ключ QIWI кошелька (первые 3 галочки доступа)
config.token = "1520558426:AAHZiZfA3skUbe1ysRj0fP03ighQecEQvNs"; // API ключ бота
config.bot_id = 1520558426; // ID бота (первая часть API ключа)
config.bot_username='BestPR_Bot'; // Юзернейм бота
config.bot_chat='BestPR_Bot'; // Юзернейм чата бота
config.bot_views_channel = 'BestPR_Bot💰💵💸'; // Юзернейм канала с просмотрами (бот должен быть в админах!)
config.bonus_channel = "https://t.me/zarabotok010102"; // Канал, на который необходимо подписаться для получения ежедневного бонуса
config.bot_start_timestamp = 1592092800; // Таймстемп запуска бота в UNIX формате
config.qiwi_update = 30000; // Частота проверки на новые транзакции QIWI
config.antispam_interval = 0.3; // Интервал антиспама (с)
config.mm_interval = 75; // Интервал между сообщениями при рассылке
config.stats_update = 60; // Частота обновления статистики (с)
config.voucher_res = 8; // Количество символов в чеке

// Ценовые параметры бота:
config.bonusadv_sum = 50; // Стоимость рекламы в разделе бонуса
config.massmailing_kf = 0.009; // Стоимость 1-го пользователя при рассылке
config.pin_kf = 0.015; // Стоимость 1ого подписчика канала с просмотрами
config.bonus = 0.06; // Размер ежедневного бонуса
config.member_cost = 0.35; // Стоимость 1 подписчика
config.member_pay = 0.25; // Выплата за 1 подписчика
config.bot_cost = 0.35; // Стоимость 1 пользователя бота
config.bot_pay = 0.25; // Выплата за 1 пользователя бота
config.group_cost = 0.35; // Стоимость 1 участника
config.group_pay = 0.25; //Выплата за вступление в группу
config.task_comm = 0.3; //Комиссия заданий
config.exit_fee = -0.5; // Штраф за выход из канала
config.ref1_percent = 0.15; // % партнёрских отчислений 1ого уровня
config.ref2_percent = 0.05; // % партнёрских отчислений 2ого уровня
config.ref1_pay = 0.25; // Выплата за реферала на 1ой линии
config.ref2_pay = 0.1; // Выплата за реферала на 2ой линии
config.min_subs = 10; // Минимальный заказ подписчиков
config.min_bot = 10; // Минимальный заказ переходов на бот
config.min_group = 10; // Минимальный заказ участников
config.min_payout = 20; // Минимальный размер выплаты
config.min_subs_time = 7; // Кол-во дней обязательной подписки
config.ref_msg_cost = 50; // Стоимость функции реф. сообщений
config.qiwi_num = '79999795730'; // Номер QIWI


config.about_text = '🚀 Добро пожаловать!' // отредактировать









module.exports = config;

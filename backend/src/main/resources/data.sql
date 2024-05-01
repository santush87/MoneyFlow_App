INSERT INTO roles (`id`, `role`)
VALUES (1, 'ADMIN'),
       (2, 'USER');

INSERT INTO `expense_data`.`category_type` (`id`, `description`, `name`) VALUES ('1', 'Разходи свързани с храна и напитки', 'Храна и напитки');

INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('1', 'Сметките от супермаркетите', 'Супермаркет');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('2', '', 'Ресторанти');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('3', '', 'Кафенета');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('4', '', 'Алкохолни напитки');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('5', '', 'Бързо хранене');

INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('1', '1');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('1', '2');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('1', '3');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('1', '4');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('1', '5');


INSERT INTO `expense_data`.`category_type` (`id`, `description`, `name`) VALUES ('2', 'Сметките свързани с жилището', 'Жилище');

INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('6', '', 'Наем');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('7', '', 'Ипотека');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('8', '', 'Ток');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('9', '', 'Газ');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('10', '', 'Вода');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('11', '', 'Застраховка на дома');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('12', '', 'Подобрения на дома');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('13', '', 'Поддръжка и ремонт');

INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('2', '6');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('2', '7');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('2', '8');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('2', '9');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('2', '10');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('2', '11');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('2', '12');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('2', '13');


INSERT INTO `expense_data`.`category_type` (`id`, `description`, `name`) VALUES ('3', '', 'Транспорт');

INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('14', '', 'Гориво');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('15', '', 'Автомобилна застраховка');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('16', '', 'Поддръжка на автомобила');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('17', '', 'Паркинг');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('18', '', 'Обществен транспорт');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('19', '', 'Автомивка и детайлинг');

INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('3', '14');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('3', '15');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('3', '16');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('3', '17');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('3', '18');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('3', '19');



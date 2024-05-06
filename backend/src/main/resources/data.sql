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


INSERT INTO `expense_data`.`category_type` (`id`, `description`, `name`) VALUES ('4', 'Разходи свързани със здравето', 'Здравеопазване');

INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('20', 'Вноски за здравни осигуровки', 'Здравно осигуряване');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('21', 'Болнични разходи', 'Медицински сметки');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('22', 'Разходи за лекарства', 'Лекарства');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('23', 'Посещения при лекар', 'Лекар');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('24', 'Стоматологични сметки', 'Стоматолог');

INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('4', '20');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('4', '21');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('4', '22');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('4', '23');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('4', '24');


INSERT INTO `expense_data`.`category_type` (`id`, `description`, `name`) VALUES ('5', 'Разходи свързани с услуги за лични грижи', 'Облекло и лични грижи');

INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('25', 'Покупки на дрехи', 'Дрехи');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('26', 'Покупки на обувки', 'Обувки');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('27', 'Покупки на всякаква козметика', 'Козметика');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('28', 'Покупки на гримове', 'Грим');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('30', '', 'Продукти за грижа за косата и кожата');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('31', 'Разходи за подстрижки', 'Фризьор/Барбър');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('32', '', 'Масажи и спа процедури');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('33', 'Карти - месечни, еднократни...', 'Фитнес и уелнес програми');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('34', 'Разходи за психолог', 'Психологически консултации');

INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('5', '25');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('5', '26');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('5', '27');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('5', '28');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('5', '29');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('5', '30');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('5', '31');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('5', '32');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('5', '33');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('5', '34');

INSERT INTO `expense_data`.`category_type` (`id`, `description`, `name`) VALUES ('6', 'Разходи свързани с развлечения', 'Развлечения');

INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('35', '', 'Барове/Ресторанти');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('36', '', 'Клубове/Дискотеки');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('37', '', 'Събития и Концерти');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('38', '', 'Хобита');
INSERT INTO `expense_data`.`expense` (`id`, `description`, `name`) VALUES ('39', '', 'Филми, музика и книги');

INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('6', '35');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('6', '36');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('6', '37');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('6', '38');
INSERT INTO `expense_data`.`category_type_expenses` (`category_entity_id`, `expenses_id`) VALUES ('6', '39');

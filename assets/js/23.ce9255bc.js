(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{661:function(e,n,r){"use strict";r.r(n);var s=r(34),a=Object(s.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"реалізація-інформаціиного-та-програмного-забезпечення"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#реалізація-інформаціиного-та-програмного-забезпечення"}},[e._v("#")]),e._v(" Реалізація інформаційного та програмного забезпечення")]),e._v(" "),r("p",[e._v("В рамках проєкту розробляється:")]),e._v(" "),r("h2",{attrs:{id:"sql-скрипт-для-створення-на-початкового-наповнення-бази-даних"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql-скрипт-для-створення-на-початкового-наповнення-бази-даних"}},[e._v("#")]),e._v(" SQL-скрипт для створення на початкового наповнення бази даних")]),e._v(" "),r("div",{staticClass:"language-query extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;\nSET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;\nSET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';\n\n-- -----------------------------------------------------\n-- Schema mydb\n-- -----------------------------------------------------\nDROP SCHEMA IF EXISTS `mydb` ;\n\n-- -----------------------------------------------------\n-- Schema mydb\n-- -----------------------------------------------------\nCREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;\nUSE `mydb` ;\n\n-- -----------------------------------------------------\n-- Table `mydb`.`user`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`user` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`user` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `name` VARCHAR(255) NULL,\n  `login` VARCHAR(255) NULL,\n  `password` VARCHAR(255) NULL,\n  PRIMARY KEY (`id`))\nENGINE = InnoDB;\n\n-- -----------------------------------------------------\n-- Table `mydb`.`query`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`query` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`query` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `title` VARCHAR(255) NULL,\n  `user_id` INT NOT NULL,\n  `role_id` INT NOT NULL,\n  PRIMARY KEY (`id`, `user_id`, `role_id`, `source_id`),\n  INDEX `fk_query_user_idx` (`user_id` ASC) VISIBLE,\n  INDEX `fk_query_role_idx` (`role_id` ASC) VISIBLE,\n  INDEX `fk_query_source_idx` (`source_id` ASC) VISIBLE,\n  CONSTRAINT `fk_query_user`\n    FOREIGN KEY (`user_id`)\n    REFERENCES `mydb`.`user` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_query_role`\n    FOREIGN KEY (`role_id`)\n    REFERENCES `mydb`.`role` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n  CONSTRAINT `fk_query_source`\n    FOREIGN KEY (`source_id`)\n    REFERENCES `mydb`.`source` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`role`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`role` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`role` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `name` VARCHAR(255) NULL,\n  `description` VARCHAR(255) NULL,\n  PRIMARY KEY (`id`))\nENGINE = InnoDB;\n\n-- -----------------------------------------------------\n-- Table `mydb`.`result`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`result` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`result` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `name` VARCHAR(255) NULL,\n  `description` VARCHAR(255) NULL,\n  `query_id` INT NOT NULL,\n  PRIMARY KEY (`id`, `query_id`),\n  INDEX `fk_result_query_idx` (`query_id` ASC) VISIBLE,\n  CONSTRAINT `fk_result_query`\n    FOREIGN KEY (`query_id`)\n    REFERENCES `mydb`.`query` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n-- -----------------------------------------------------\n-- Table `mydb`.`scraperType`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`scraperType` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`scraperType` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `type` VARCHAR(45) NULL,\n  `repo` VARCHAR(45) NULL,\n  `source_id` INT NOT NULL,\n  PRIMARY KEY (`id`, `source_id`),\n  INDEX `fk_scraper_type_source1_idx` (`source_id` ASC) VISIBLE,\n  CONSTRAINT `fk_scraper_type_source1`\n    FOREIGN KEY (`source_id`)\n    REFERENCES `mydb`.`source` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`scraperInstance`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`scraperInstance` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`scraperInstance` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `end_point` VARCHAR(45) NULL,\n  `task_id` INT NOT NULL,\n  `scraperType_id` INT NOT NULL,\n  PRIMARY KEY (`id`, `scraperType_id`),\n  INDEX `fk_scraperInstance_scraperType1_idx` (`scraperType_id` ASC) VISIBLE,\n  CONSTRAINT `fk_scraperInstance_scraperType1`\n    FOREIGN KEY (`scraperType_id`)\n    REFERENCES `mydb`.`scraperType` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`message`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`message` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`message` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `data` TEXT NULL,\n  `scraperInstance_id` INT NOT NULL,\n  `result_id` INT NOT NULL,\n  PRIMARY KEY (`id`, `scraperInstance_id`, `result_id`),\n  INDEX `fk_message_result_idx` (`result_id` ASC) VISIBLE,\n  INDEX `fk_message_scraperInstance1_idx` (`scraperInstance_id` ASC) VISIBLE,\n  CONSTRAINT `fk_message_scraperInstance1`\n    FOREIGN KEY (`scraperInstance_id`)\n    REFERENCES `mydb`.`scraperInstance` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION,\n    CONSTRAINT `fk_message_result`\n    FOREIGN KEY (`result_id`)\n    REFERENCES `mydb`.`result` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\n-- -----------------------------------------------------\n-- Table `mydb`.`metadata`\n-- -----------------------------------------------------\nDROP TABLE IF EXISTS `mydb`.`metadata` ;\n\nCREATE TABLE IF NOT EXISTS `mydb`.`metadata` (\n  `id` INT NOT NULL AUTO_INCREMENT,\n  `key` VARCHAR(255) NULL,\n  `value` TEXT NULL,\n  `message_id` INT NOT NULL,\n  PRIMARY KEY (`id`, `message_id`),\n  INDEX `fk_metadata_message1_idx` (`message_id` ASC) VISIBLE,\n  CONSTRAINT `fk_metadata_message1`\n    FOREIGN KEY (`message_id`)\n    REFERENCES `mydb`.`message` (`id`)\n    ON DELETE NO ACTION\n    ON UPDATE NO ACTION)\nENGINE = InnoDB;\n\n\nSET SQL_MODE=@OLD_SQL_MODE;\nSET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;\nSET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;\n\n--------------------------------------------------------\n-- Data for table `mydb`.`user`\n--------------------------------------------------------\n\nSTART TRANSACTION;\n\nUSE `mydb`;\n\nINSERT INTO `mydb`.`user` (`id`, `name`, `email`, `password`) VALUES (DEFAULT, 'gddgdg', 'g@gmail.com', 'passw123');\nINSERT INTO `mydb`.`user` (`id`, `name`, `email`, `password`) VALUES (DEFAULT, 'daniil', 'd@gmail.com', 'passw321');\n\nCOMMIT;\n\n-------------------------------------------------------\n-- Data for table `mydb`.`source`\n-------------------------------------------------------\n\nSTART TRANSACTION;\n\nUSE `mydb`;\n\nINSERT INTO `mydb`.`source` (`id`, `url`, `api_key`) VALUES (DEFAULT, 'https://kpi.ua', 'AZdsdadWEqweWQEQWEQds');\nINSERT INTO `mydb`.`source` (`id`, `url`, `api_key`) VALUES (DEFAULT, 'https://mono.ua', 'AZdsdEwerwweWQEQWEQds');\n\nCOMMIT;\n")])])]),r("h2",{attrs:{id:"restfull-сервіс-для-управління-даними"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#restfull-сервіс-для-управління-даними"}},[e._v("#")]),e._v(" RESTfull сервіс для управління даними")]),e._v(" "),r("h3",{attrs:{id:"точка-входу-проєкту"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#точка-входу-проєкту"}},[e._v("#")]),e._v(" Точка входу проєкту")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("'use strict'\n\nconst express = require('express');\nconst bodyParser = require('body-parser');\nconst config = require('./yaml-config.js')('./service.config.yml');\n\nconst app = express();\n\n/*app.use(function (request, response, next) {\n  console.log(response);\n  next();\n});*/\napp.use(bodyParser.text());\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({extended: false}));\n\napp.use('/query', require('./routes/query.js'));\n\napp.listen(config.service.port, () => {\n  console.log(`http://localhost:${config.service.port}/`);\n});\n")])])]),r("h3",{attrs:{id:"конфігураціинии-фаил-проєкту"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#конфігураціинии-фаил-проєкту"}},[e._v("#")]),e._v(" Конфігураційний файл проєкту")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("service:\n  name: MyServer\n  port: 8080\n\ndb:\n  host: localhost\n  dbName: mydb\n  userName: root\n  userPassword: a7z0032\n  dialect: mysql\n")])])]),r("h3",{attrs:{id:"api-взаємодіі-з-конфігурацією"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-взаємодіі-з-конфігурацією"}},[e._v("#")]),e._v(" API взаємодії з конфігурацією")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("'use strict'\n\nconst yaml = require(\"js-yaml\");\nconst fs = require(\"fs\");\n\nfunction loadConfig(file) {\n  try {\n    return yaml.load(fs.readFileSync(file, 'utf8'));\n  } catch (e) {\n    console.log(e);\n  }\n}\n\nmodule.exports = loadConfig;\n")])])]),r("h3",{attrs:{id:"api-взаємодіі-з-базою-даних"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api-взаємодіі-з-базою-даних"}},[e._v("#")]),e._v(" API взаємодії з базою даних")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("'use strict'\n\nconst mysql = require('mysql2/promise');\nconst config = require('../yaml-config.js')('./service.config.yml');\n\nconst executeSql = async (query, values) => {\n  let connection;\n  let sqlStatement;\n  try {\n    connection = await mysql.createConnection({\n      host: config.db.host,\n      user: config.db.userName,\n      password: config.db.userPassword,\n      database: config.db.dbName,\n      namedPlaceholders: true,\n    });\n\n    sqlStatement = connection.format(query, values);\n    const [results] = await connection.execute(sqlStatement);\n    return results;\n  }\n  catch (e) {\n    throw new Error(`${e.toString()}`);\n  } finally {\n    if(connection) connection.end();\n  }\n}\nmodule.exports = { executeSql };\n")])])]),r("h3",{attrs:{id:"контролер-маршруту-query"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#контролер-маршруту-query"}},[e._v("#")]),e._v(' Контролер маршруту "/query"')]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("'use strict'\n\nconst express = require('express');\n\nconst { executeSql } = require('./routes.js');\n\nconst query = {\n  createQuery: `INSERT INTO query (title, user_id, role_id, source_id) VALUE (:title, :user_id, :role_id, :source_id)`,\n  readQuery: `SELECT * FROM query WHERE id = :id`,\n  readAllQueries: `SELECT * FROM query`,\n  updateQuery: `UPDATE query SET title = :title, user_id = :user_id, role_id = :role_id, source_id = :source_id WHERE id = :id`,\n  deleteQuery: `DELETE FROM query WHERE id = :id`,\n};\n\nconst router = new express.Router();\n\nrouter.post('/', async (req, res) => {\n  try {\n    await executeSql(query.createQuery, req.body);\n    let result = await executeSql(query.readQuery, req.params);\n    res.status(200).send(result);\n  } catch (e) {\n    console.log(e);\n    return res.status(500).send(`Something bad happened...`);\n  }\n});\n\nrouter.get('/', async (req, res) => {\n  try {\n    let result = await executeSql(query.readAllQueries, req.params);\n    res.status(200).send(result);\n  } catch (e) {\n    console.log(e);\n    return res.status(500).send(`Something bad happened...`);\n  }\n});\n\nrouter.get('/:id', async (req, res) => {\n  try {\n    let result = await executeSql(query.readQuery, req.params);\n    res.status(200).send(result);\n  } catch (e) {\n    console.log(e);\n    return res.status(500).send(`Something bad happened...`);\n  }\n});\n\nrouter.put('/:id', async (req, res) => {\n  try {\n    await executeSql(query.updateQuery, { ...req.body, ...req.params });\n    let result = await executeSql(query.readQuery, req.params);\n      res.status(200).send(result);\n  } catch (e) {\n    console.log(e);\n    return res.status(500).send(`Something bad happened...`);\n  }\n});\n\nrouter.delete('/:id', async (req, res) => {\n  try {\n    let result = await executeSql(query.readQuery, req.params);\n    await executeSql(query.deleteQuery, req.params);\n    res.status(200).send(result);\n  } catch (e) {\n    console.log(e);\n    return res.status(500).send(`Something bad happened...`);\n  }\n});\n\nmodule.exports = router;\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);
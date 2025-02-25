# Реалізація інформаційного та програмного забезпечення

В рамках проєкту розробляється: 
## SQL-скрипт для створення на початкового наповнення бази даних

```query
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`user` ;

CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `login` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`query`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`query` ;

CREATE TABLE IF NOT EXISTS `mydb`.`query` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`, `user_id`, `role_id`, `source_id`),
  INDEX `fk_query_user_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_query_role_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_query_source_idx` (`source_id` ASC) VISIBLE,
  CONSTRAINT `fk_query_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `mydb`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_query_role`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_query_source`
    FOREIGN KEY (`source_id`)
    REFERENCES `mydb`.`source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`result`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`result` ;

CREATE TABLE IF NOT EXISTS `mydb`.`result` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` VARCHAR(255) NULL,
  `query_id` INT NOT NULL,
  PRIMARY KEY (`id`, `query_id`),
  INDEX `fk_result_query_idx` (`query_id` ASC) VISIBLE,
  CONSTRAINT `fk_result_query`
    FOREIGN KEY (`query_id`)
    REFERENCES `mydb`.`query` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`scraperType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scraperType` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scraperType` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(45) NULL,
  `repo` VARCHAR(45) NULL,
  `source_id` INT NOT NULL,
  PRIMARY KEY (`id`, `source_id`),
  INDEX `fk_scraper_type_source1_idx` (`source_id` ASC) VISIBLE,
  CONSTRAINT `fk_scraper_type_source1`
    FOREIGN KEY (`source_id`)
    REFERENCES `mydb`.`source` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`scraperInstance`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`scraperInstance` ;

CREATE TABLE IF NOT EXISTS `mydb`.`scraperInstance` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `end_point` VARCHAR(45) NULL,
  `task_id` INT NOT NULL,
  `scraperType_id` INT NOT NULL,
  PRIMARY KEY (`id`, `scraperType_id`),
  INDEX `fk_scraperInstance_scraperType1_idx` (`scraperType_id` ASC) VISIBLE,
  CONSTRAINT `fk_scraperInstance_scraperType1`
    FOREIGN KEY (`scraperType_id`)
    REFERENCES `mydb`.`scraperType` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`message`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`message` ;

CREATE TABLE IF NOT EXISTS `mydb`.`message` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `data` TEXT NULL,
  `scraperInstance_id` INT NOT NULL,
  `result_id` INT NOT NULL,
  PRIMARY KEY (`id`, `scraperInstance_id`, `result_id`),
  INDEX `fk_message_result_idx` (`result_id` ASC) VISIBLE,
  INDEX `fk_message_scraperInstance1_idx` (`scraperInstance_id` ASC) VISIBLE,
  CONSTRAINT `fk_message_scraperInstance1`
    FOREIGN KEY (`scraperInstance_id`)
    REFERENCES `mydb`.`scraperInstance` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_message_result`
    FOREIGN KEY (`result_id`)
    REFERENCES `mydb`.`result` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`metadata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`metadata` ;

CREATE TABLE IF NOT EXISTS `mydb`.`metadata` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `key` VARCHAR(255) NULL,
  `value` TEXT NULL,
  `message_id` INT NOT NULL,
  PRIMARY KEY (`id`, `message_id`),
  INDEX `fk_metadata_message1_idx` (`message_id` ASC) VISIBLE,
  CONSTRAINT `fk_metadata_message1`
    FOREIGN KEY (`message_id`)
    REFERENCES `mydb`.`message` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

--------------------------------------------------------
-- Data for table `mydb`.`user`
--------------------------------------------------------

START TRANSACTION;

USE `mydb`;

INSERT INTO `mydb`.`user` (`id`, `name`, `email`, `password`) VALUES (DEFAULT, 'gddgdg', 'g@gmail.com', 'passw123');
INSERT INTO `mydb`.`user` (`id`, `name`, `email`, `password`) VALUES (DEFAULT, 'daniil', 'd@gmail.com', 'passw321');

COMMIT;

-------------------------------------------------------
-- Data for table `mydb`.`source`
-------------------------------------------------------

START TRANSACTION;

USE `mydb`;

INSERT INTO `mydb`.`source` (`id`, `url`, `api_key`) VALUES (DEFAULT, 'https://kpi.ua', 'AZdsdadWEqweWQEQWEQds');
INSERT INTO `mydb`.`source` (`id`, `url`, `api_key`) VALUES (DEFAULT, 'https://mono.ua', 'AZdsdEwerwweWQEQWEQds');

COMMIT;
```

## RESTfull сервіс для управління даними

### Точка входу проєкту

```
'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const config = require('./yaml-config.js')('./service.config.yml');

const app = express();

/*app.use(function (request, response, next) {
  console.log(response);
  next();
});*/
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/query', require('./routes/query.js'));

app.listen(config.service.port, () => {
  console.log(`http://localhost:${config.service.port}/`);
});
```

### Конфігураційний файл проєкту

```
service:
  name: MyServer
  port: 8080

db:
  host: localhost
  dbName: mydb
  userName: root
  userPassword: a7z0032
  dialect: mysql
```

### API взаємодії з конфігурацією

```
'use strict'

const yaml = require("js-yaml");
const fs = require("fs");

function loadConfig(file) {
  try {
    return yaml.load(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    console.log(e);
  }
}

module.exports = loadConfig;
```

### API взаємодії з базою даних

```
'use strict'

const mysql = require('mysql2/promise');
const config = require('../yaml-config.js')('./service.config.yml');

const executeSql = async (query, values) => {
  let connection;
  let sqlStatement;
  try {
    connection = await mysql.createConnection({
      host: config.db.host,
      user: config.db.userName,
      password: config.db.userPassword,
      database: config.db.dbName,
      namedPlaceholders: true,
    });

    sqlStatement = connection.format(query, values);
    const [results] = await connection.execute(sqlStatement);
    return results;
  }
  catch (e) {
    throw new Error(`${e.toString()}`);
  } finally {
    if(connection) connection.end();
  }
}
module.exports = { executeSql };
```

### Контролер маршруту "/query"

```
'use strict'

const express = require('express');

const { executeSql } = require('./routes.js');

const query = {
  createQuery: `INSERT INTO query (title, user_id, role_id, source_id) VALUE (:title, :user_id, :role_id, :source_id)`,
  readQuery: `SELECT * FROM query WHERE id = :id`,
  readAllQueries: `SELECT * FROM query`,
  updateQuery: `UPDATE query SET title = :title, user_id = :user_id, role_id = :role_id, source_id = :source_id WHERE id = :id`,
  deleteQuery: `DELETE FROM query WHERE id = :id`,
};

const router = new express.Router();

router.post('/', async (req, res) => {
  try {
    await executeSql(query.createQuery, req.body);
    let result = await executeSql(query.readQuery, req.params);
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
    return res.status(500).send(`Something bad happened...`);
  }
});

router.get('/', async (req, res) => {
  try {
    let result = await executeSql(query.readAllQueries, req.params);
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
    return res.status(500).send(`Something bad happened...`);
  }
});

router.get('/:id', async (req, res) => {
  try {
    let result = await executeSql(query.readQuery, req.params);
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
    return res.status(500).send(`Something bad happened...`);
  }
});

router.put('/:id', async (req, res) => {
  try {
    await executeSql(query.updateQuery, { ...req.body, ...req.params });
    let result = await executeSql(query.readQuery, req.params);
      res.status(200).send(result);
  } catch (e) {
    console.log(e);
    return res.status(500).send(`Something bad happened...`);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let result = await executeSql(query.readQuery, req.params);
    await executeSql(query.deleteQuery, req.params);
    res.status(200).send(result);
  } catch (e) {
    console.log(e);
    return res.status(500).send(`Something bad happened...`);
  }
});

module.exports = router;
```

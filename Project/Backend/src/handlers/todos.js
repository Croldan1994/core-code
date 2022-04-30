const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

async function getDBHandler() {
  try {
    const dbHandler = await open({
      filename: "db.sqlite3",
      driver: sqlite3.Database, //Manejara la interaccion entre la base de datos y nuestro programa
    });

    if (!dbHandler)
      throw new Error(`Ocurrio un error con el DBHANDLER : ${dbHandler}`);
    return dbHandler;

  } catch (error) {
    console.error(`Ocurrio un error ${error.message}`);
  }
}

async function initializeDB() {
    try {
        const dbHandler = await getDBHandler() ; 
        await dbHandler.exec(`
        CREATE TABLE IF NOT EXISTS todos(
            id INTEGER PRIMARY KEY,
            title TEXT,
            description TEXT,
            is_done INTEGER DEFAULT 0 
        )
        `) ; 
        await dbHandler.close()

    } catch (error) {
        console.log(`Ocurrio un error al inicializar la Base de Datos ${error.message}`);
    }
}

module.exports={initializeDB,getDBHandler}
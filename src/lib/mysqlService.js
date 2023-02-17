export default class MysqlService {

  async addProductToMySQL(product) {
    try {
      //Start Time
      const startTime = performance.now();

      //Test
      const response = await fetch("http://localhost:5173/api/products", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      const result = await response.json();

      //Stop Time
      const endTime = performance.now();
      const mysqlAddTime = endTime - startTime;

      //Show Results
      console.log(`MySQL: Product aangemaakt met id: ${result.id} en duurde ${mysqlAddTime} MS`);

      //Return
      return mysqlAddTime;
    } catch (error) {
      console.log(error);
    }
  }

  async getProductFromMySQL() {
    try {
      //Start Time
      const startTime = performance.now();

      //Test
      const result = await fetch("http://localhost:5173/api/products");

      //Stop Time
      const endTime = performance.now();
      const mysqlAddTime = endTime - startTime;
      
      //Show Results
      const product = result.json();
      console.log(product);
      console.log(`MySQL: Product opgehaald en duurde ${mysqlAddTime}MS`);

      //Return
      return mysqlAddTime;
    } catch (error) {
      console.log(error);
    }
  }
}





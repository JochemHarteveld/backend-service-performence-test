<script>
  // Product
  import FirebaseService from "$lib/firebaseService";
  import SupabaseService from "$lib/supabaseService";
  import MysqlService from "$lib/mysqlService";

  const fbService = new FirebaseService();
  const sbService = new SupabaseService();
  const sqlService = new MysqlService();

  const product = {
    title: "Boek",
    description: "Een leuke roman van 400 bladzijden",
    price: 14.99,
    inStock: true,
    imageUrl: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
  };

  let latestFirebaseAddTime = 0;
  let latestSupabaseAddTime = 0;
  let latestMysqlAddTime = 0;

  let latestFirebaseGetTime = 0;
  let latestSupabaseGetTime = 0;
  let latestMysqlGetTime = 0;

</script>

<div class="container">
  <div class="firebase">
    <button
      on:click={async () =>
        (latestFirebaseAddTime = await fbService.addProductToFirebase(product))}
      >Add product to Firebase</button
    >
    <p>Adding took {latestFirebaseAddTime} ms</p>
    <button
      on:click={async () =>
        (latestFirebaseGetTime = await fbService.getProductFromFirebase())}
      >Get product from Firebase</button
    >
    <p>Getting took {latestFirebaseGetTime} ms</p>
  </div>
  <div class="supabase">
    <button
      on:click={async () =>
        (latestSupabaseAddTime = await sbService.addProductToSupabase(product))}
      >Add product to Supabase</button
    >
    <p>Adding took {latestSupabaseAddTime} ms</p>
    <button
      on:click={async () =>
        (latestSupabaseGetTime = await sbService.getProductFromSupabase())}
      >Get product from Supabase</button
    >
    <p>Getting took {latestSupabaseGetTime} ms</p>
  </div>
  <div class="sql">
    <button
      on:click={async () =>
        (latestMysqlAddTime = await sqlService.addProductToMySQL(product))}
      >Add product to MySQL</button
    >
    <p>Adding took {latestMysqlAddTime} ms</p>
    <button
      on:click={async () =>
        (latestMysqlGetTime = await sqlService.getProductFromMySQL())}
      >Get product from MySQL</button
    >
    <p>Getting took {latestMysqlGetTime} ms</p>
  </div>
</div>

<style>
  :global(body) {
    background-color: rgb(27, 27, 43);
  }

  .container {
    background-color: rgb(56, 56, 73);
    width: 720px;
    display: flex;
    justify-content: space-between;
    margin: 10rem auto;
    padding: 20px;
    border-radius: 10px;
  }

  .container > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  p {
    color: white;
  }
</style>

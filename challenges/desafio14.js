db.produtos.find(
  { ingredientes: 
    { $exists: true, $eq: "picles" } }, 
    { _id: 0, nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 } },
  );

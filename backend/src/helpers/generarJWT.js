import jwt from "jsonwebtoken";

export const generarJWT = (id) => {
  return new Promise((resolve, reject) => {
    // Para generar un token se utiliza el metodo sign que significa fimar.
    // Recibe como primer parametro la informacion y como segundo el 'secret' que seria la firma del token.
    jwt.sign(
      id,
      "mysecret",
      {
        // Se establece un tiempo de duración del token.
        expiresIn: 60 * 60 * 24,
      },
      (err, token) => {
        err ? reject(err) : resolve(token);
      }
    );
  });
};

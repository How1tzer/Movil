import React from "react";
import { NativeBaseProvider, Box, Container } from "native-base";
import Formulario from "./components/Formulario";
import Tabla from "./components/Tabla";

export default function App() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Container>
          <Formulario />
          {/* Aquí puedes agregar el componente Tabla y pasarle los usuarios añadidos como parámetro */}
          {/* Ejemplo: */}
          {/* <Tabla usuarios={usuarios} handleBorrar={handleBorrar} /> */}
        </Container>
      </Box>
    </NativeBaseProvider>
  );
}

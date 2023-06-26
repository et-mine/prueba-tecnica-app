  export const usuarioValidar = (usuario: string) => {
    const re = /\S+@\S+\.\S+/;    
  
    if (!usuario || usuario.length <= 4) return 'Ingresar email de usuario.';
    if (!re.test(usuario)) return 'Ingresar un email de usuario válido.';

    return '';
  };
  
  export const claveValidar = (clave: string) => {
    const may = /[A-ZÁÉÍÓÚÜÑ]/;

    if (!clave || clave.length <= 8 || !may.test(clave)) return 'Ingresar mínimo 8 caracteres y una mayúscula para la contraseña.'

    return '';
  };
<template>
        <RecuperarPassword boton="Recuperar Contrsaeña" titulo="Recuperar Contraseña" cancelar="Cancelar"/>
</template>

<script>
import RecuperarPassword from '../../components/RecuperarPassword'

export default {
  name: 'App',

  components: {
    RecuperarPassword
  },
  data: () => ({
    //
  })
}
</script>

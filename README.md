# 🖥 Portfolio Web

## 📝 Descripción

  El proyecto consiste en un portfolio web personal como trabajo final del curso de Argentina Programa, donde se aplica los conocimientos
  aprendidos en los diferentes módulos cursados.
  
  ![Opera Instantánea_2023-04-27_201022_pnfg-91647 web app](https://user-images.githubusercontent.com/94196914/235009732-9f5c1a61-b4c9-4e21-9484-74f570b4e8ac.png)
  
  El portfolio es responsive, se adapta a cualquier resolución, aunque esta seteado para una resolución máxima de 800px por el diseño que
  se eligio,
  pero puede ser fácilmente modificado editando el archivo ```home.component.css``` en la carpeta  ```src\app\componentes\home```
  ```
  .container-md {
    max-width: 800px;
  }
  ```
  
## ⌨Instalación

Para correr la webapp de manera local tendrás que:
  
1-Clonar el repositorio

git clone ``` https://github.com/nico0cul/portofolioFrontend.git ```

2-Instalar las dependencias

```npm install```

3-Compilar y montar el proyecto utilizando el comando ```ng serve```

4-Tener corriendo un servidor con el backend https://github.com/nico0cul/portfolioBackend para que los datos viajen correctamente entre el back y el front.
  
## 🛠Uso

### Navegación
  Accediendo a la web app en https://pnfg-91647.web.app se puede navegar normalmente sin tener que estar logueado, 
  la app al estar alojada en un servidor gratuito de render tardara algunos minutos en cargar la primera vez.
  
  Para poder realizar las funciones de CRUD se debe tener acceso a las credenciales de usuario.
  
### Login
  Al presionar el botón INGRESAR en la parte superior derecha, se le pedirá los datos de acceso de usuario,
  necesarios para realizar CRUDs en la wepapp.
  
  ![loginn](https://user-images.githubusercontent.com/94196914/234579517-60378d18-b032-4d8d-86fd-c1c5f6294dea.png)

  ### Alta de Datos
  
  ![Portfolio](https://user-images.githubusercontent.com/94196914/234574826-8bd6ed80-bdcc-45eb-a68a-70332a51178b.png)
  
  Presionando el boton + Agregar Nueva Experiencia se le abrirá un formulario para rellenar con los datos que desee, al finalizar 
  presione otra vez para confirmar.
  
  ![Portfolio (1)](https://user-images.githubusercontent.com/94196914/234575329-5778f669-1ffb-41c2-9478-36458887d598.png)

  ### Edición y Eliminación
  El boton editar le permitirá editar cada uno de los elementos que lo contengan.
  
  ![Portfolio (2)](https://user-images.githubusercontent.com/94196914/234576019-1a713181-e96e-443d-a35a-172938c00e4b.png)
  
  El botón eliminar borrara automaticamente todo el elemento.
  
  ![Portfolio (3)](https://user-images.githubusercontent.com/94196914/234576303-bdf3b689-d3df-419d-8194-db2354fbbbb2.png)

## ✔️Tecnologías Utilizadas

- Java
- TypeScript
- Angular
- SpringBoot
- MySQL
- HTML
- CSS
   
## Apéndice  

❗ Problemas de la version 15 de angular
  
  Un problema que surgió fue que en la versión 15 de Angular no se crea automáticamente la carpeta ```environments```
  por lo que no se instalan correctamente las dependencias de Firebase, por tal motivo se debe crear dicha
  carpeta de forma manual, un problema de difícil percepción ya que no mostraba errores en ninguna parte.

## Crédito

Desarrollador principal Garay Nicolas Fernando https://github.com/nico0cul
  












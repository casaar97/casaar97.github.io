---
author: "Carlos Sánchez Arribas"
date: 2019-02-26
linktitle: Creando un sitio web con Hugo
title: Creando un sitio web con Hugo
highlight: true
---


{{% toc %}}

## **Introducción**

En este tutorial vamos a aprender a crear un sitio web con Hugo.

Hugo es un generador de sitios web estáticos escrito en Go, y es software libre.

Los generadores de sitios web estáticos, aunque tienen limitaciones, son muy interesantes por generar sitios muy rápidos y seguros.

El tutorial estará dividido en varias partes para facilitar su comprensión.

</b>

## Instalación de Hugo



Para ver otras formas de instalar Hugo visita el siguiente enlace: <a href="https://gohugo.io/getting-started/installing/"> Instalar Hugo</a>.

### Instalación de Hugo en MacOs:
```
brew update && brew install hugo
```
### Instalación de Hugo en Linux
```
snap install hugo
```
### Instalación de Hugo en Ubuntu/Debian
```
sudo apt-get install hugo
```

{{% alert note %}}
Se recomienda utilizar snap para instalar Hugo en Ubuntu ya que en caso de utilizar apt-get se instalará la versión 0.40 de Hugo, la cual ya es antigua.
{{% /alert %}}

Una vez que hayamos instalado Hugo, es recomendable utilizar el siguiente comando para comprobar que todo ha salido correctamente.

Además obtendremos información sobre la versión de Hugo.
```
hugo version
```


## Creación de un proyecto

El primer paso es la creación del directorio del proyecto, en nuestro caso lo llamaremos **proyecto**:
```
hugo new site proyecto
```

Una vez creado el directorio del proyecto, observaremos una serie de directorios en su interior:

* **archetypes**: Plantillas para la creación de contenido.
* **config.toml**: Archivo de configuración del sitio (Puede estar en formato TOML, YAML o JSON).
* **content**: Archivos con el contenido ordenado en carpetas que siguen la misma jerarquía que mostrará el contenido en el sitio público. Dicho contenido puede estar en formato Markdown o HTML.
* **data**: Contenido adicional para incluir en el sitio web. Esta carpeta contiene archivos en formato TOML, YAML, JSON, incluso CSV, y constituye una especie de base de datos de contenido estructurado y accesible a través de un sistema de objetos y propiedades.
* **layouts**: Plantillas en HTML, shortcodes...
* **public**: Contienen el sitio web listo para publicar generado a partir del contenido de /content, los archivos estáticos de /static y según las reglas y las plantillas definidas en el resto de carpetas de Hugo.
* **static**: Archivos estáticos como hojas de estilo o imágenes.
* **themes**: Temas instalados.

Además, Hugo puede funcionar con git como sistema de control de cambios, de manera que el proyecto completo sea un repositorio.

Para ello una vez creado el sitio se puede crear el repositorio en la carpeta:

```
git init
```


## Seleccionar y descargar un tema

Una vez hemos creado la carpeta de nuestro proyecto, vamos a seleccionar un tema para el mismo.

Los temas se encuentran en la siguiente [página](https://themes.gohugo.io).


En caso de querer descargar todos los temas utilizaremos el siguiente comando:

```
git clone --depth 1 --recursive https://github.com/gohugoio/hugoThemes.git themes
```

En caso de querer descargar un tema en concreto y una vez localizado el tema que queremos utilizar, usamos el siguiente comando:

```
cd proyecto
cd themes
git clone URL_TEMA
```

Otra opción es añadir el tema como un submódulo de nuestro proyecto:
```
git init (En caso de no haberlo hecho anteriormente)
git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
echo 'theme = "ananke"' >> config.toml
```

En nuestro caso vamos a instalar el tema "[Minimal Academic](https://themes.gohugo.io/minimal-academic/)"


## Subida del proyecto a Github Pages

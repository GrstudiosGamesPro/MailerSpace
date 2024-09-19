CDN: https://cdn.jsdelivr.net/gh/GrstudiosGamesPro/MailerSpace@main/mailerspace.js

EXAMPLE

```js

let data = {
          title: "Tu título aquí",
          clientemail: JSON.stringify([
            "...",
            "...",
            "...",
          ]),
          copyemail: "...",
          clientname: "Nombre del Cliente",
          subject: "Asunto del correo",
          body: "Este es el cuerpo del correo",
          altbody: "Texto alternativo del correo",
          protocol: "ssl",
          token: "...",
          password: "...",
        };

        send_data_email(data);

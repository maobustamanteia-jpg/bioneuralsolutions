---
description: Cómo desplegar Sulphomax en Producción (Vercel + GitHub)
---
# Flujo de Despliegue a Producción

Este flujo define la regla estricta que todas las IA futuras deben seguir al momento de hacer cambios en la landing de Sulphomax.

// turbo-all
1. Modifica siempre el código donde tiene que estar (ej. `C:\Users\Usuario\Downloads\sulphomax`).
2. Despliega directo a producción haciendo el respectivo **Push** a GitHub. Vercel lee desde la rama `main` de `mauriciobustamantegaravito-hubs-projects/sulphomax`.
   ```bash
   cd C:\Users\Usuario\Downloads\sulphomax
   git add .
   git commit -m "update: cambios aplicados a produccion"
   git push origin main
   ```
3. Verifica visualmente que **los cambios se hayan reflejado correctamente en producción** entrando a [https://sulphomax.vercel.app](https://sulphomax.vercel.app).
4. Infórmale al usuario obligatoriamente declarando: **"Ya está desplegado en producción"** y detalla cómo lo verificaste.

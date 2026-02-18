export default function Privacidad() {
  return (
    <div className="min-h-screen bg-deep-void px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <a
          href="/"
          className="mb-8 inline-block font-[family-name:var(--font-body)] text-sm text-stardust/50 transition-colors hover:text-white"
        >
          &larr; Volver
        </a>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white">
          Política de Privacidad
        </h1>
        <div className="mt-8 space-y-6 font-[family-name:var(--font-body)] text-sm leading-relaxed text-stardust/70">
          <p>Última actualización: Febrero 2026</p>

          <h2 className="text-xl font-bold text-white">1. Información que recopilamos</h2>
          <p>
            Recopilamos únicamente la información necesaria para brindarte el
            servicio: tu signo zodiacal y preferencias de notificación. No
            recopilamos información personal identificable como nombre, correo
            electrónico ni ubicación sin tu consentimiento explícito.
          </p>

          <h2 className="text-xl font-bold text-white">2. Uso de la información</h2>
          <p>
            La información se utiliza exclusivamente para personalizar tu
            experiencia con el horóscopo diario, enviar notificaciones y mejorar
            el servicio.
          </p>

          <h2 className="text-xl font-bold text-white">3. Almacenamiento</h2>
          <p>
            Tus datos se almacenan de forma segura y se protegen con medidas de
            seguridad estándar de la industria.
          </p>

          <h2 className="text-xl font-bold text-white">4. Compartir información</h2>
          <p>
            No vendemos, comercializamos ni transferimos tu información personal
            a terceros. Podemos compartir datos agregados y anónimos con fines
            analíticos.
          </p>

          <h2 className="text-xl font-bold text-white">5. Tus derechos</h2>
          <p>
            Tienes derecho a acceder, corregir o eliminar tus datos personales
            en cualquier momento. Puedes ejercer estos derechos contactándonos.
          </p>

          <h2 className="text-xl font-bold text-white">6. Cookies y análisis</h2>
          <p>
            Utilizamos cookies esenciales para el funcionamiento del sitio web.
            Podemos utilizar herramientas de análisis anónimas para mejorar la
            experiencia.
          </p>

          <h2 className="text-xl font-bold text-white">7. Contacto</h2>
          <p>
            Para consultas sobre privacidad, escríbenos a
            privacidad@horoscopop.app
          </p>
        </div>
      </div>
    </div>
  );
}

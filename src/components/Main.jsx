import foto from "../assets/foto-tp1.jpg";

const Main = ({ me }) => {

  return (
    <main className="bg-neutral-950">
      <section className="bg-main">
        <div className="bg-black/70 backdrop-blur-[3px]">
          <div className="container min-h-screen flex flex-col items-center justify-center gap-7 relative">
            <h1 className="text-5xl text-center font-extralight tracking-wide text-neutral-50 montserrat">
              Bienvenidos a mi portafolio, soy {me.name} {me.surname}, desarrollador Web
            </h1>
            <p className="kaushan-script italic text-2xl font-medium text-neutral-400 absolute bottom-10 left-1/2 -translate-x-1/2">
              &quot;{me.frase}&quot;
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex gap-8 mx-48">
            <img
              src={foto}
              alt="matias"
              className="rounded-xl w-86 h-96 object-cover bg-center"
            />
            <div className="text-neutral-50 py-7">
              <h2 className="text-5xl text-neutral-500 font-semibold mb-3">
                Sobre mi
              </h2>
              <p className="font-extralight text-xl">
                {me.about}
              </p>

              <h4 className="text-2xl mt-10 text-neutral-500 font-semibold mb-2">
                Tecnologías
              </h4>
              <p className="kaushan-script italic text-xl font-medium text-neutral-400 mt-3">
                &quot;{me.frase2}&quot;
              </p>

              <h2 className="text-2xl text-neutral-500 font-semibold mt-4">
                Mas sobre mi
              </h2>
              <p className="kaushan-script italic text-xl font-medium text-neutral-400 mt-3">Amante del bucle for ❤ </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;

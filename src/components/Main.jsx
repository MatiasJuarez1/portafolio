// import foto from "../assets/foto-tp1.jpg";

const Main = () => {
  const alumno = {
    nombre: "Matias Juarez",
  };

  return (
    <main>
      <section className="bg-main">
        <div className="bg-black/70 backdrop-blur-[3px]">
          <div className="container min-h-screen flex items-center justify-center gap-7">
            {/* <img src={foto} alt="matias" className="rounded-full w-96 h-96 object-cover bg-center" /> */}
            <h1 className="text-5xl text-center font-extralight tracking-wide text-neutral-50 montserrat">
              Bienvenidos a mi portafolio, soy Matias Juarez, desarrollador Web
            </h1>
          </div>
        </div>
      </section>
      <section className="min-h-screen bg-neutral-950"></section>
    </main>
  );
};

export default Main;

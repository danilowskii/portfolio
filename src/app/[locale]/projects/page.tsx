export default function Projects() {
  const projectsList = [
    {
      projeto: "projeto1",
      desc: "desc1",
    },
    { projeto: "projeto 2", desc: "desc2" },
    { projeto: "projeto 2", desc: "desc2" },
    { projeto: "projeto 2", desc: "desc2" },
  ];
  return (
    <section>
      <div className="">
        <div className="flex flex-1 gap-6 flex-wrap ">
          {projectsList.map((project, idx) => (
            <div className="bg-teal-300  p-6 rounded-md" key={idx}>
              {project.projeto}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

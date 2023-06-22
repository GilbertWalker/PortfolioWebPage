import Button from "./Button";
import ProjCard from "./ProjCard";
import projects from "../data.json"

export default function Projects() {
 



  return (
    <div className="pt-10 pb-10 ">
      <div className="flex justify-between items-center ">
        <h1 className="font-bold lg:text-[88px] sm:text-[72px] text-[40px]">
          Projects
        </h1>
        <Button
          name="CONTACT ME"
          style="  font-bold border-b-4 pb-1 block border-b-primary-green hover:text-primary-green tracking-wider"
        />
      </div>

      <div className="sm:grid   md:grid-cols-2 lg:grid-cols-3 gap-x-20 pt-10">
        {projects.map((item,i)=>{
          return <ProjCard key={i} data={item}  />

        })}
      </div>
    </div>
  );
}

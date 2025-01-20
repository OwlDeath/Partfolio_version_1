import usersStore, { selectRepos } from "@store/userStore";
import { useEffect, useRef } from "react";
import star from "@assets/image/star.svg";
import cinephile from "@assets/image/CinePhile.png";
import grayson from "@assets/image/Grayson.png";
import todolist from "@assets/image/ToDoList.png";
import vuecinema from "@assets/image/VueSinema.png";
import weatherapp from "@assets/image/weatherapp.png";
 


const MyProject = () => {
  const fetchData = usersStore((state) => state.fetchData);
  const isMounted = useRef<boolean>(false);
  const repos = usersStore(selectRepos);
console.log(repos);


  const projects = [
    { name: "cinephile", image: cinephile },
    { name: "Greyson", image: grayson },
    { name: "ToDoListVite", image: todolist },
    { name: "vue-cinema", image: vuecinema },
    { name: "weatherapp", image: weatherapp }
  ];

  useEffect(() => {
    fetchData();
    isMounted.current = true;
  }, [fetchData]);

  return (
    <>
      <div className="card__content" id="project">
        <h3>My Project</h3>
        <img src={star} alt="" className="star" />
      </div>
      <div className="card__box">
        {isMounted.current && (
          <>
            {repos?.map((item, idx: number) => {
              const projectImage = projects.find(
                (project) =>
                  project.name.toLowerCase() === item?.name?.toLowerCase()
              )?.image; 

              return (
                <div className="card-list" key={idx}>
                  <article className="card">
                    <figure className="card-image">
                      <a href="#">
                        {projectImage && (
                          <img src={projectImage} alt={item?.name} />
                        )}
                      </a>
                    </figure>
                    <div className="card-header">
                      <a href="#">{item?.name}</a>
                      <button
                        className={`icon-button ${!item?.homepage ? "disabled" : ""}`}
                        disabled={!item?.homepage}
                      >
                        {item?.homepage ? (
                          <a href={item?.homepage} target="_blank" rel="noopener noreferrer">
                            <i className="fa-solid fa-link"></i>
                          </a>
                        ) : (
                          <i className="fa-solid fa-link"></i>
                        )}
                      </button>
                    </div>
                    <div className="card-footer">
                      <div className="card-meta card-meta--views">
                        <i className="fa-solid fa-eye"></i>
                        {item?.watchers_count}
                      </div>
                      <div className="card-meta card-meta--date">
                        <i className="fa-regular fa-calendar"></i>
                        {item?.created_at}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default MyProject;

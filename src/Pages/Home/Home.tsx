import "./Home.css";

export const Home = () => {
  const userProfile = {
    name: "Sean Denzel Robenta",
    position: "Vice President",
    committee: "Research and Development",
    email: "sean_robenta@dlsu.edu.ph",
  };

  return (
    <>
      {/* App Content*/}
      <div className="homeLayout">
        {/* Info Part */}
        <div>
          {/* Header*/}
          <div className="header">
            <div className="headerTitle">Hello, {userProfile.name}</div>
            <div className="headerDesc">
              <span className="position">{userProfile.position}</span>{" "}
              {userProfile.committee}
            </div>
            <div className="headerDesc">{userProfile.email}</div>
          </div>
          {/*   Fun Fact       */}
          <div className="funFact">
            <div className="factTitle">Did you Know?</div>
            <div className="factDesc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              rem recusandae et minima natus? Sunt quod voluptas amet error
              vero! Quo nostrum vel dicta deleniti hic recusandae atque eaque
              optio.
            </div>
          </div>
        </div>
        {/*   Scan ID        */}
        <div>
          <div className="scanTitle">Scan the back of your ID here!</div>
          <div className="scanID"></div>
        </div>
      </div>
    </>
  );
};

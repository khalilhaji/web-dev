import PostSummaryList from "./PostSummaryList";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col-10">
                    <input
                       type="text"
                       class="form-group form-input rounded-pill"
                       style="width: 100%; font-family: Arial, FontAwesome"
                       placeholder="&#xf002; Search Tuiter" />
                </div>
                <div class="col-2">
                    <i class="fa fa-cog fa-2x float-end" style="color: #299fd6"></i>
                </div>
            </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">For You</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Trending</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">News</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Sports</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Entertainment</a>
                </li>
           </ul>
           <div class="card">
        <img
          src="images/ship.jpeg"
          class="img-fluid card-img"
          style="width: 100%"
        />
        <div class="card-img-overlay">
          <h2 style="color: white; bottom: 0; position: absolute">
            SpaceX's Starship
          </h2>
        </div>
      </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

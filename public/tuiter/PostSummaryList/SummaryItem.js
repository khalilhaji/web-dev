const SummaryItem = (post) => {
    const topic = post.topic ? `<span style="color: gray">${post.topic}</span><br />` : ``
    return(`
        <li class="list-group-item">
          <div class="row">
            <div class="col-10">
              ${topic}
                <strong>${post.userName}</strong> <i class="fas fa-check-circle"></i> -
                ${post.time}
                <br />
                <strong>
                  ${post.title}
                </strong>
            </div>
            <div class="col-2">
              <img
                src=${post.image}
                class="img-fluid"
                style="height: 100%; width: 100%"
              />
            </div>
          </div>
        </li>`)
}

export default SummaryItem;
import Layout from "../components/Layout"

const Index = () => (
  <Layout>
    {/**Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="portfolio1.jpeg" alt="" className="img-fluid"></img>
            </div>
            <div className="col-md-8">
              <h1>Aldair Duque</h1>
              <h3>Programador JR</h3>
              <p>Anim ullamco anim culpa id adipisicing non laboris. Duis laborum esse laboris pariatur dolor cillum. Consectetur laboris consectetur duis ea dolor nulla labore Lorem qui tempor nisi nostrud. Ullamco nulla duis dolore eiusmod.</p>
              <a href="/hireme">hireme</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </Layout>
)

export default Index;

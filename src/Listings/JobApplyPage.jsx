const JobApplyPage = () => {
  return ( 
    <main className="dashboardRoute job-apply">
       <section>
        <h1>UI/UX designer wanted!!!</h1>
        <p>We @LogicLegends are in great need of a UI/UX designer. This person will be responsible for designing all web Ui's that goes out of the LogicLegends. He will also review current website to imporve upon the UI.</p>
        <div>Pending</div>
       </section>
       <form action="">
        <div>
          <div>
            <label htmlFor="">Headline</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
        </div>

        <div>
          <button>Submit</button>
        </div>
       </form>
    </main>
);
}
 
export default JobApplyPage;
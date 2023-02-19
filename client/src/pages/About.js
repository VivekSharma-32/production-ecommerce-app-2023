import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce App"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            cupiditate fuga, ad nemo laboriosam reiciendis. Blanditiis, vel sunt
            maxime a unde nihil cupiditate nulla dolorem asperiores molestiae ex
            officia qui quod officiis, autem incidunt id repellendus aut earum
            vitae! Ratione labore consequatur dicta reprehenderit a expedita
            nisi nostrum possimus nam aliquid, nemo, provident illum?
            Voluptatibus, reprehenderit deleniti pariatur quod odit accusamus,
            similique cum, natus fugiat sed facere molestiae voluptatem.
            Obcaecati, cumque! Est dolorem atque asperiores voluptas quos
            officiis ipsum, aperiam, possimus facere pariatur quod voluptatem?
            Iste hic, nostrum atque ducimus ex optio beatae quia quidem! Nisi
            sit rerum tenetur vero!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;

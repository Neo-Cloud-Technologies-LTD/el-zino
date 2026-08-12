import "./services.css";

function ServicesSection(){
    return(
        <>
        <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
   
    
    <section class="services">
    <h2>OUR SERVICES</h2>
    <div class="underline"></div>

    <div class="service-container">

        <div class="service-card">
            <img src="src/assets/residential.png" alt="Residential Construction"/>
            <h3>Residential Construction</h3>
            <p>
                At EL-ZINO, we specialize in building beautiful and functional
                homes that meet the needs of families. Our team works closely
                with clients to ensure every detail is perfect.
            </p>
        </div>

        <div class="service-card">
            <img src="src/assets/commercial.png" alt="Commercial Development"/>
            <h3>Commercial Development</h3>
            <p>
                We offer comprehensive commercial construction services,
                from office buildings to retail spaces. Our focus is on
                delivering quality structures that enhance your business.
            </p>
        </div>

        <div class="service-card">
            <img src="src/assets/renovation.png" alt="Renovation and Remodeling"/>
            <h3>Renovation and Remodeling</h3>
            <p>
                Our renovation services breathe new life into your existing
                spaces. Whether it's a kitchen remodel or a complete home
                renovation, we bring your vision to reality.
            </p>
        </div>

    </div>
</section>
        </>
    )
}

export default ServicesSection;

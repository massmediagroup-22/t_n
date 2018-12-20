<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <nav class="navbar navbar-expand-lg navbar-light">
              <a 
                class="navbar-brand" 
                href="#">
                <img 
                  src="" 
                  alt="Logo">
              </a>
              <button 
                class="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"/>
              </button>
              <div 
                id="navbarNavAltMarkup" 
                class="collapse navbar-collapse">
                <div class="navbar-nav">
                  <a 
                    class="nav-item nav-link active" 
                    href="#">Home <span class="sr-only">(current)</span></a>
                  <a 
                    class="nav-item nav-link" 
                    href="#">Features</a>
                  <a 
                    class="nav-item nav-link" 
                    href="#">Pricing</a>
                  <a 
                    class="nav-item nav-link disabled" 
                    href="#">Disabled</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">bottom</div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  &-bottom {
    background-image: url('~assets/img/header-bg.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    color: transparent;
  }
}
</style>

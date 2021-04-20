

<template>
<div class="col col-md-2" >
		<div class="p-3 bg-white" style="width: 280px;" >
  <a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
    
    <span class="fs-5 fw-semibold">ECS API</span>
  </a>
  <ul class="list-unstyled ps-0">
    <li class="mb-1">
      <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
        Core
      </button>
      <div class="collapse show" id="home-collapse">
        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><a href="#" class="link-dark rounded">Niffler API</a></li>
          <li><a href="#" class="link-dark rounded">Apollo API</a></li>
          <li><a href="#" class="link-dark rounded">Cirrus API</a></li>
          <li><a href="#" class="link-dark rounded">Quiron API</a></li>
        </ul>
      </div>
    </li>
    <li class="mb-1">
      <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
        Other
      </button>
      <div class="collapse" id="dashboard-collapse">
        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><a href="#" class="link-dark rounded">Tax Engine API</a></li>
          <li><a href="#" class="link-dark rounded">Reports API</a></li>
          <li><a href="#" class="link-dark rounded">Polaris API</a></li>
          <li><a href="#" class="link-dark rounded">Brain API</a></li>
        </ul>
      </div>
    </li>
    <li class="border-top my-3"></li>
    <li class="mb-1">
      <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
        External Links
      </button>
      <div class="collapse" id="account-collapse">
        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <li><a href="#" class="link-dark rounded">Shape Reports API</a></li>
        </ul>
      </div>
    </li>
  </ul>
</div>
	</div>
</template>
<script>
export default {
  name: 'SideBar'
}
</script>
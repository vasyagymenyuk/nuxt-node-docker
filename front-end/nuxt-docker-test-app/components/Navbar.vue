<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Блог</a>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <nuxt-link
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/posts"
            >
              Все посты
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              active-class="active"
              class="nav-link"
              aria-current="page"
              to="/users"
            >
              Все пользователи
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

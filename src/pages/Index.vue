<template>
  <div>
    <Layout>
      <!-- Page Header -->
      <header
        class="masthead"
        :style="{backgroundImage: `url(${GRIDSOME_API_URL+geneal.cover.url}')`}"
      >
        <div class="overlay"></div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div class="site-heading">
                <h1>{{geneal.title}}</h1>
                <span class="subheading">{{geneal.subtitle}}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div
              class="post-preview"
              v-for="edge in $page.allStrapiPost.edges"
              :key="edge.node.id"
            >
              <g-link :to="'/post/'+edge.node.id">
                <h2 class="post-title">
                  {{ edge.node.title }}
                </h2>
                <h3 class="post-subtitle">
                  Problems look mighty small from 150 miles up
                </h3>
              </g-link>
              <p class="post-meta">
                Posted by
                <a href="#">Start Bootstrap</a>
                {{ edge.node.created_at }}
              </p>
              <p>
                <span v-for="tag in edge.node.tags" :key="tag.id">
                  <g-link :to="'/tag/'+tag.id"> {{ tag.title }} </g-link>&nbsp;&nbsp;
                </span>
              </p>
              <hr />
            </div>

            <!-- Pager -->
            <!-- <div class="clearfix">
              <a class="btn btn-primary float-right" href="#"
                >Older Posts &rarr;</a
              >
            </div> -->
            <Pager :info="$page.allStrapiPost.pageInfo"/>
          </div>
        </div>
      </div>
    </Layout>
  </div>
</template>

<page-query>
query($page:Int){
  allStrapiPost(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        created_at
      
      }
    }
  }

  allStrapiGeneral{
    edges{
      node{
        id
        title
        subtitle
        cover{
          url
        }
      }
    }
  }
}

  
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Pager
  },
  name: "homePage",
  computed:{
    geneal(){
      return this.$page.allStrapiGeneral.edges[0].node
    }
  }
};
</script>

<style>
</style>

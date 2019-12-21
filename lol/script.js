const champList = {
  template: `<section>
<div class="champSearchContainer">
 <input class="champSearch" v-model="search" type="text" placeholder="Find a Champion..." /></div>
<div class="champList">
<div v-for="champ of filteredList" class="champData">
<div :style="{ backgroundImage: 'url(https://cdn.communitydragon.org/9.24.1/champion/' + champ.key + '/splash-art/centered)' }"  class="champImg">
<router-link :to="'/champion/'+champ.id">
<div class="champData">
<div class="champDisplay">
<h1 class="champName">{{champ.name}}</h1>
<h1 class="champTitle">{{champ.title}}</h1>
</router-link>
</div>
</div>
</div>
</div>
</div>
</section>`,
  data() {
    return {
      champions: [],
      search: ""
    };
  },
  async created() {
    let champ = await axios.get(
      "https://ddragon.leagueoflegends.com/cdn/9.24.1/data/en_US/champion.json"
    );
    let data = champ.data.data;
    let keys = Object.keys(data);
    let champs = keys.map(x => data[x]);
    this.champions = champs;
  },
    computed: {
    filteredList() {
      return this.champions.filter(post => {
        return post.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
};

const Champion = {
  data() {
    return {
      champ: [],
      showModal: false,
      modalImage: "",
      tooltipName: "",
      tooltipDescription: "",
      modelView: "",
      showTooltip: false,
      iframe: {
        loaded: false
      }
    };
  },
  computed: {
    champSkin: function() {
      return this.champ.skins
    }
  },
  methods: {
    closeModal: function() {
      const body = document.body;
      body.style.overflow = 'auto';

    },
    modelEditor: function() {
      this.iframe.loaded = true;
    },
    grabImage: function(key, skin, num) {
      const body = document.body;
      body.style.overflow = 'hidden';
      this.modelView = `https://irule.at/models/?champKey=${this.champ.name}&skinId=${num}`
      return (this.modalImage = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${key}/${skin}.jpg`);
    },
    displayToolTip: function(text, description) {
      this.tooltipName = text;
      this.tooltipDescription = description;
    }
  },
  async created() {
    let champ = await axios.get(
      `https://ddragon.leagueoflegends.com/cdn/9.24.1/data/en_US/champion/${
      this.$route.params.id
      }.json`
    );
    let data = champ.data.data;
    let keys = Object.keys(data);
    let champs = keys.map(x => data[x]);
    this.champ = champs[0];
  },
  //$route.params.id
  template: `<div><section>
<transition name="fade" mode="out-in">
<div v-show="showModal" @click="showModal = !showModal;closeModal()" class="modal">
<div class="modelContainer">
<iframe v-on:load="modelEditor" v-show="iframe.loaded" id="modelframe" ref="editor" :src="modelView" id="modelViewer"></iframe>
</div>
<img class="modalImage" :src="modalImage" />
</div>
</transition>
<div :style="{ backgroundImage: 'url(https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/' + champ.key + '/' + champ.skins[0].id + '.jpg)'}" class="champWallpaper">
<div class="champWallpaperLayout">
<div class="champWallpaperName">
{{champ.name}}
</div>
<div class="champWallpaperTitle">
{{champ.title}}        
</div>
</div>
</div>



<div class="champWallpaperContainer">
<div class="champWallpaperLore">
{{champ.lore}}
</div>
<div class="champWallpaperRole">
<p>Role</p> <div v-for="role of champ.tags"  class="champWallpaperImg"> <img class="champRoleImages" :src="'https://raw.communitydragon.org/pbe/plugins/rcp-fe-lol-hover-card/global/default/roleicon-'+role.toLowerCase()+'.png'" /><div>{{role}}</div></div>
</div>
</div>

<div class="champWallpaperTitle">Champion Abilities</div>
<div @mouseleave="showTooltip = false" class="championSkills">
<div><img @mouseover="displayToolTip(champ.passive.name, champ.passive.description);showTooltip = true"  :src="'https://ddragon.leagueoflegends.com/cdn/9.24.2/img/passive/'+champ.passive.image.full"/></div>
<div v-for="item of champ.spells">
<img @mouseover="displayToolTip(item.name, item.description);showTooltip = true" :src="'https://ddragon.leagueoflegends.com/cdn/9.24.2/img/spell/'+ item.image.full" />
</div>
<div v-show="showTooltip" class="championToolTip"><p v-html="tooltipName"></p> <p v-html="tooltipDescription"></p></div>

</div>

<div class="champWallpaperTitle">Champion Info</div>

<div class="championSkills">
<div class="championSkillData">
<div class="champSkillBlockContainer" v-for="(key, value) of champ.info">
<p>{{value}}</p><div class="champSkillSplit"> <div class="champSkillBlock" v-for="item of key"></div></div>
</div>
</div>
</div>

<div class="champWallpaperTitle">Champion Skins</div>
<div class="champWallpaperSkins">

<div :style="{ backgroundImage: 'url(https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/'+champ.key+'/' + skin.id + '.jpg)' }" class="champWallpaperSkinGallery" v-for="skin of champSkin">
<div  @click="showModal = !showModal;grabImage(champ.key,skin.id, skin.num);" class="champWallpaperData">
<div class="champWallpaperDisplay">
<h1 class="champName">{{skin.name}}</h1>
</div>
</div>
</div>
</div>
</section>`
};
const router = new VueRouter({
  routes: [
    { path: "/champion/:id", component: Champion },
    { path: "/", component: champList }
  ]
});

const app = new Vue({
  router
}).$mount("#app");
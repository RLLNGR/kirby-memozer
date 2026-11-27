// Vue Mémo du Panel — Markdown rendu en PHP (index.php), passé en props par la zone `memozer`.
// Habillage de la vue Audience de Moniter : crème, barres d'encre en minuscules, blocs blancs.
// Source de index.js : après toute modification, npm run build (voir scripts/build-panel.mjs).

panel.plugin('rllngr/kirby-memozer', {
  components: {
    'k-memozer-view': {
      props: {
        file: String,
        exists: Boolean,
        sections: Array,
      },
      template: `
        <k-panel-inside class="k-memozer-view">
          <div class="k-memozer">
            <header class="k-memozer-ink k-memozer-header">
              <h1>{{ $t('memozer.title') }}</h1>
              <code>{{ file }}</code>
            </header>
            <template v-if="sections.length">
              <section v-for="(html, i) in sections" :key="i" class="k-memozer-block k-memozer-text" v-html="html"></section>
            </template>
            <p v-else class="k-memozer-block k-memozer-message">
              {{ $t(exists ? 'memozer.empty' : 'memozer.missing', { file }) }}
            </p>
          </div>
        </k-panel-inside>
      `,
    },
  },
})

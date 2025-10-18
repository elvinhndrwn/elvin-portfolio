<template>
  <LayoutScrollSmooth>
    <section id="work" class="container">
      <!-- Content -->
      <p class="badge">{{ WORK.label }}</p>
      <h2 class="section-title">
        {{ WORK.headline }}
      </h2>
      <p class="paragraph mt-4 max-w-xl">
        {{ WORK.subline }}
      </p>

      <!-- Works List -->
      <div class="grid md:grid-cols-2 gap-6 mt-16">
        <div
          class="p-3 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center group"
          v-for="item in WORK.works"
        >
          <div class="overflow-hidden aspect-[4/3] rounded-lg">
            <img
              class="group-hover:scale-105 transition-all duration-500 w-full h-full object-cover"
              :src="'/images/work/' + item.thumbnails"
              :alt="'Thumbnail ' + item.name"
            />
          </div>

          <div
            class="absolute bottom-6 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 inset-x-6 bg-gradient-to-t bg-black/90 backdrop-blur-sm transition-all duration-500 rounded-xl overflow-hidden p-4"
          >
            <div>
              <div class="flex items-center justify-between">
                <div>
                  <h3
                    class="text-white text-lg lg:text-xl tracking-wide font-bold"
                  >
                    {{ item.name }}
                  </h3>
                  <p class="font-medium uppercase tracking-wide text-gray-600">
                    {{ item.type }}
                  </p>
                </div>
                <button
                  @click="openInfoModal(item)"
                  class="text-gray-400 hover:text-blue-400 transition"
                >
                  <VsxIcon iconName="InfoCircle" :size="22" type="linear" />
                </button>

                <NuxtLink :to="item.live_demo">
                  <VsxIcon
                    class="text-gray-400"
                    iconName="ExportSquare"
                    :size="24"
                    type="linear"
                  />
                </NuxtLink>
              </div>
              <div
                class="bg-gradient-to-r w-44 h-[1px] from-transparent via-blue-500 to-transparent my-2"
              ></div>
              <p class="paragpraph text-gray-400">
                {{ item.description }}
              </p>
            </div>
          </div>

          <div
            class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"
          ></div>
        </div>
      </div>
    </section>
  </LayoutScrollSmooth>

  <div
    v-if="showModal"
    class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <div
      class="bg-gray-900 rounded-2xl p-6 w-[90%] max-w-md relative shadow-xl"
    >
      <button
        @click="closeModal"
        class="absolute top-3 right-3 text-gray-400 hover:text-white"
      >
        <VsxIcon iconName="CloseCircle" :size="24" type="linear" />
      </button>

      <h3 class="text-xl font-bold text-white mb-2">{{ selectedItem.name }}</h3>
      <p class="text-sm text-gray-400 uppercase tracking-wide mb-3">
        {{ selectedItem.type }}
      </p>
      <div
        class="bg-gradient-to-r w-full h-[1px] from-transparent via-blue-500 to-transparent my-3"
      ></div>
      <div
        class="text-gray-300 space-y-2 leading-relaxed"
        v-html="selectedItem.details"
      ></div>

      <div class="mt-5 text-right">
        <NuxtLink
          :to="selectedItem.live_demo"
          target="_blank"
          class="text-blue-400 hover:underline"
        >
          Lihat Demo →
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);
const selectedItem = ref({});

const openInfoModal = (item) => {
  selectedItem.value = item;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};
</script>

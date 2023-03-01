<script setup>
    import { reactive } from 'vue'

    import IconPhoto from '@/components/icons/IconPhoto.vue'
    import IconAround from '@/components/icons/IconAround.vue'
    import IconCube from '@/components/icons/IconCube.vue'

    import '@/assets/scss/tabBtns.scss'

    const state = reactive({
        tabActive: 'photo',
        tabList: {
            photo: {
                name: 'photo',
                icon: IconPhoto
            },
            around: {
                name: '360',
                icon: IconAround
            },
            cube: {
                name: '3D',
                icon: IconCube
            }
        }
    })

    const toggleTab = (tab) => {
        state.tabActive = tab
    }
</script>

<template>
    <div class="tab-box">
        <button 
            v-for="(item, itemKey) in state.tabList"
            :key="itemKey"
            :class="{active: itemKey === state.tabActive}" 
            @click="toggleTab(itemKey)"
        >
            <span :class="itemKey">
                <component :is="item.icon"/>
            </span>
            <span>{{ item.name }}</span>
        </button>
    </div>
</template>
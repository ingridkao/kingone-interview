<script setup>
import { reactive } from 'vue'
import TabBtn from '@/components/TabBtn.vue'
import '@/assets/scss/card.scss'

const state = reactive({
	contentShow: true,
	product: {
		number: 12345678,
		name: 'TMA-2 STUDIO',
		info: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.產品介紹 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
		photo: '/img/tma-2.jpeg'
	}
})

const closeCard = () => {
  state.contentShow = !state.contentShow
}

</script>

<template>
	<div class="card-wrapper">
		<button :class="{open: state.contentShow}" @click="closeCard"></button>
		<transition name="fade">
			<div v-show="state.contentShow">
				<div class="img-wrapper">
					<div class="img-box" :style="{
						backgroundImage: `url(${state.product.photo})`
					}"></div>
					<TabBtn/>
				</div>
				<div class="text-wrapper">
					<h6>產品型號{{ state.product.number }}</h6>
					<h5>產品名稱 {{ state.product.name }}</h5>
					<p>產品介紹 {{ state.product.info }}</p>
				</div>
			</div>
		</transition>
    </div>
</template>

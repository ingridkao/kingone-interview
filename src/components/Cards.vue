<script setup>
import WelcomeItem from './WelcomeItem.vue'
import '@/assets/scss/card.scss'

</script>

<template>
	<div class="card-wrapper">
		<div class="img-wrapper">
			<div class="img-box"></div>
			<div class="tab-box">
				<button class="active">
					<span class="photo">
						<svg viewBox="0 0 27 28" xmlns="http://www.w3.org/2000/svg">
							<path d="M22.7812 6.40625V5.5625C22.7793 4.89177 22.512 4.24907 22.0377 3.77479C21.5634 3.30051 20.9207 3.0332 20.25 3.03125H3.375C2.70427 3.0332 2.06157 3.30051 1.58729 3.77479C1.11301 4.24907 0.845698 4.89177 0.84375 5.5625V19.0625C0.845698 19.7332 1.11301 20.3759 1.58729 20.8502C2.06157 21.3245 2.70427 21.5918 3.375 21.5938H4.21875" stroke-width="1.5" stroke-linejoin="round"/>
							<path d="M23.731 7.25H7.48775C6.14832 7.25 5.0625 8.33582 5.0625 9.67525V22.5435C5.0625 23.8829 6.14832 24.9688 7.48775 24.9688H23.731C25.0704 24.9688 26.1562 23.8829 26.1562 22.5435V9.67525C26.1562 8.33582 25.0704 7.25 23.731 7.25Z" stroke-width="1.5" stroke-linejoin="round"/>
							<path d="M19.6651 13.6936C20.5613 13.6936 21.2878 12.9723 21.2878 12.0826C21.2878 11.1928 20.5613 10.4716 19.6651 10.4716C18.769 10.4716 18.0425 11.1928 18.0425 12.0826C18.0425 12.9723 18.769 13.6936 19.6651 13.6936Z" stroke-width="1.5" stroke-miterlimit="10"/>
							<path d="M18.0431 20.1262L13.4473 15.5704C13.1535 15.2802 12.7605 15.1122 12.3477 15.1003C11.9348 15.0885 11.5329 15.2337 11.2229 15.5066L5.0625 20.942M13.9867 24.9688L20.2405 18.7603C20.5283 18.4765 20.911 18.3094 21.3148 18.2912C21.7185 18.273 22.1147 18.405 22.4269 18.6617L26.1562 21.7472" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>
					</span>
					<span>photo</span>
				</button>
				<button>
					<span class="around">
						<svg viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M34.5 9.94118C34.5 7.22353 27.1385 5 18 5C8.86154 5 1.5 7.22353 1.5 9.94118M1.5 9.94118C1.5 12.6588 8.86154 14.8824 18 14.8824V11.1765L25.6154 18.5882L18 26V22.2941C8.86154 22.2941 1.5 20.0706 1.5 17.3529V9.94118Z" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
							<circle cx="31.5" cy="15.5" r="3"/>
						</svg>
					</span>
					<span>360</span>
				</button>
				<button>
					<span class="cube">
						<svg viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.51638 14.1222C6.51638 12.119 6.53124 10.116 6.5062 8.11282C6.48092 7.85952 6.53337 7.60463 6.65618 7.38166C6.77899 7.15869 6.96656 6.97808 7.19415 6.86407C10.7476 4.82301 14.294 2.7693 17.833 0.702645C18.0353 0.567935 18.2734 0.497112 18.5164 0.50009C18.7595 0.503069 18.9961 0.579727 19.195 0.719355C22.7151 2.77599 26.2417 4.81958 29.7752 6.85062C30.0045 6.96029 30.1956 7.13665 30.3233 7.35639C30.4511 7.57614 30.5098 7.82913 30.4916 8.08266C30.4727 12.1392 30.4727 16.1952 30.4916 20.2506C30.5097 20.5039 30.4506 20.7564 30.3225 20.9757C30.1944 21.1949 30.003 21.3703 29.7735 21.479C26.2401 23.5112 22.714 25.5557 19.195 27.6123C18.9839 27.7535 18.7349 27.8275 18.481 27.8242C18.2271 27.8209 17.98 27.7405 17.7727 27.594C14.2726 25.5485 10.7669 23.5161 7.25569 21.4973C7.01516 21.3851 6.81483 21.2023 6.68144 20.9728C6.54806 20.7433 6.48837 20.4785 6.50986 20.2139C6.53657 18.179 6.51638 16.1538 6.51638 14.1222ZM8.97843 7.70363C9.17708 7.84386 9.2623 7.91427 9.35745 7.96936C12.2705 9.64705 15.1804 11.3348 18.1117 12.9774C18.2568 13.0312 18.4114 13.0531 18.5658 13.0422C18.7201 13.0313 18.8703 12.9876 19.0063 12.9138C21.8192 11.3296 24.6155 9.71355 27.415 8.10263C27.5953 7.99913 27.7638 7.87083 27.9758 7.72727C27.891 7.65192 27.802 7.58132 27.7089 7.51656C24.7625 5.80381 21.8193 4.08611 18.8612 2.40174C18.7258 2.35189 18.5809 2.33159 18.437 2.34224C18.293 2.35289 18.1532 2.39444 18.0266 2.46369C16.4307 3.35178 14.8548 4.27988 13.279 5.19635C11.875 6.01433 10.4759 6.83223 8.97354 7.70363H8.97843ZM28.0378 20.6044C27.7389 20.4141 27.5366 20.2807 27.338 20.1622C25.4249 19.0638 23.5113 17.9667 21.5972 16.8716C20.9578 16.506 20.7626 16.0369 21.0514 15.5845C21.3185 15.1538 21.7757 15.1172 22.4017 15.4761C24.0443 16.4176 25.6872 17.3599 27.3298 18.3025C27.8056 18.5746 28.2879 18.8367 28.8321 19.1372V9.21118C28.7116 9.25512 28.5936 9.30542 28.4783 9.36157C25.5586 11.0309 22.6355 12.7 19.7342 14.3977C19.614 14.4954 19.5161 14.618 19.4473 14.7568C19.3785 14.8956 19.3402 15.0474 19.3352 15.2022C19.3085 18.4558 19.3168 21.7129 19.3201 24.9648C19.3201 25.1501 19.3553 25.3355 19.3854 25.6226L28.0378 20.6044ZM8.17228 9.16431V19.1221C8.43437 18.9886 8.63292 18.8968 8.81989 18.7883C10.753 17.681 12.6853 16.5722 14.6161 15.4627C15.2305 15.1104 15.7059 15.1658 15.9513 15.6098C16.1967 16.0538 16.0232 16.5077 15.4223 16.8532C13.5092 17.9517 11.5956 19.0493 9.68146 20.1455C9.46277 20.2707 9.2558 20.414 8.95031 20.6093L17.6308 25.6393C17.6492 25.3055 17.6708 25.0851 17.6708 24.8731C17.6708 21.6863 17.6592 18.4978 17.6842 15.3111C17.7055 15.094 17.6582 14.8756 17.5485 14.6871C17.4388 14.4986 17.2725 14.3495 17.0733 14.2608C14.9165 13.0505 12.7798 11.8068 10.6347 10.5765C9.84847 10.1141 9.04189 9.65677 8.17717 9.16431H8.17228Z"/>
						</svg>
					</span>
					<span>3D</span>
				</button>
			</div>
		</div>
		<div class="text-wrapper">
			<h6>產品型號12345678</h6>
			<h5>產品名稱 TMA-2 STUDIO</h5>
			<p>產品介紹 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.產品介紹 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
		</div>
    </div>
</template>

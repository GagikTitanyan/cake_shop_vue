<template>
  <div class="payment">
    <div class="payment-trolley"> 
        <div class="payment-title">
          Պատվերի ամփոփում
        </div>
        <div v-if="filteredData.length" class="payment-orders">
          <TrolleyItem v-for="(order, index) of filteredData" :count="elementsCount[order.name]" :key="index" :index="index" :image="order.image" :name="order.name"  :price="order.price" />
        </div>
        <div v-else>
          Bag was Empty..
        </div>
        <div class="payment-sum">
            <div>Ընդհանուր</div>
            <div>{{ sum }} դր.</div>
        </div>
    </div>
    <div>
    <div class="payment-inputs">
      <div class="payment-title">Վճարման Տվյալներ</div>
        <div class="payment-double-inputs">
          <div class="input-container">
            <label class="payment-label">Անուն</label>
            <CustomInput v-model="data.name" type="text" />
          </div>
          <div class="input-container">
            <label class="payment-label">Ազգանուն</label>
            <CustomInput v-model="data.surname" type="text" />
          </div>
        </div>
        <div class="input-container">
          <label class="payment-label">էլ․հասցե</label>
          <CustomInput v-model="data.email" type="email" />
        </div>
        <div class="payment-double-inputs">
          <div class="input-container">
            <label class="payment-label">Մարզ</label>
            <CustomInput v-model="data.marz" type="text" />
          </div>
          <div class="input-container" >
            <label class="payment-label">Հեռախոսահամար</label>
            <CustomInput v-model="data.tel" type="tel" placeholder="+374-12-345-678" pattern="+374[0-9]{8}" required />
          </div>
        </div>
        <div class="input-container"  style="width: 55%">
          <label class="payment-label">Հասցե</label>
          <CustomInput v-model="data.address" type="email" />
        </div>
    </div>
    <div class="payment-method">
      <div class="payment-method-label">
        <div class="payment-title">Վճարման Եղանակ</div>
        <div class="payment-method-subtitle">համաձայն «ԱՆԿԱՆԽԻԿ ԳՈՐԾԱՌՆՈՒԹՅՈՒՆՆԵՐԻ ՄԱՍԻՆ» ՀՀ Օրենքի, 2022 թվականի հուլիսի 1-ից, 300,000 դրամը գերազանցող գնումների դիմաց վճարումը և վճարի ստացումն իրականացվում են բացառապես անկանխիկ եղանակով:</div>
      </div>
      <div class="payment-method-details">
        <CreditCards />
        <div class="payment-method-buttons">
          <CustomButton variant="pink-bold-button" class="btn">
            Բանկային փոխանցում
          </CustomButton>
          <CustomButton variant="pink-bold-button" class="btn">
            <img src="/images/visa.png">
          </CustomButton>
        </div>
        <div class="payment-method-buttons">
          <CustomButton variant="pink-bold-button" class="btn">
            <img src="/images/idram.png">
          </CustomButton>
          <CustomButton variant="pink-bold-button" class="btn">
            Օնլայն ապառիկ
          </CustomButton>
        </div>
      </div>
      <div class="payment-method-continue">
        <CustomButton variant="pink-bold-button-borders">Շարունակել Գնումները</CustomButton>
        <CustomButton variant="pink-bold-button" />
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import TrolleyItem from '~/components/atoms/trolley-item.vue';
import CustomInput from '~/components/atoms/custom-input.vue'
import CustomButton from '~/components/atoms/custom-button.vue';
import CreditCards from '~/public/svgs/creditCards.vue'
import { useCake } from '~/composables/cakeStore';

const { orders } = useCake()

const data = ref({
    name: '',
    surname: '',
    email: '',
    marz: '',
    tel: '+374',
    address: ''
})

const elementsCount = computed(() => {
  const counts = {}
  for (let i = 0; i < orders.value.length; i++) {
    if (counts[orders.value[i].name]) {
      counts[orders.value[i].name] = counts[orders.value[i].name] + 1
    } else {
      counts[orders.value[i].name] = 1
    }
  }
  return counts
})

const filteredData = computed(() => {
  const uniqueNamesArray = Array.from(new Set(orders.value.map(item => item.name)));

  return orders.value.filter(item => {
    if (uniqueNamesArray.includes(item.name)) {
        uniqueNamesArray.splice(uniqueNamesArray.indexOf(item.name), 1);
        return true;
    }
    return false;
  });
})

const sum = computed(() => {
  let Sum = 0
  for (let i = 0; i < orders.value.length; i++) {
    Sum += orders.value[i].price 
  }
  return Sum
})
</script>

<style lang="scss" scoped>
.payment {
  background: url(/images/paymant.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 10%;
  display: flex;
  gap: 10%;
  justify-content: space-between;
  &-title {
    font-size: 24px;
    font-weight: 500;
  }
  &-trolley, &-inputs {
    margin-top: 45vh;
  }
  &-orders {
    padding: 30px;
    gap: 10px;
    background: #FFE4F4;
    max-height: 200px;
    overflow-y: auto;
  }
  &-sum, &-double-inputs {
    display: flex;
    justify-content: space-between;
  }
  &-inputs {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 100%;
  }
  &-method {
    margin: 7% 0;
    &-label {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &-details {
      margin-top: 30px;
      display: flex;
      align-items: center;
      gap: 40px;
    }
    &-continue {
      display: flex;
      justify-content: flex-end;
      margin-top: 40px;
      gap: 25px;
      button {
        height: 50px;
        width: 25%;
      }
    }
    &-buttons {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
  &-double-inputs {
    gap: 20px;
  }
  &-trolley {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 40%;
  }
}

.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  input {
    padding-left: 10px;
  }
}

.btn {
  width: 100%;
  height: 50px;
}
 
@media (max-width: 1216px) {
  .payment {
    flex-direction: column;
    &-inputs {
      margin: 0;
    }
    &-trolley {
      width: 100%;
    }
    &-method {
      &-details {
        flex-direction: column;
      }
      &-buttons {
        width: 100%;
      }
      &-continue {
        button {
          width: 100%;
        }
      }
    }
  }
}
</style>

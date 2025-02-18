<template>
    <td :tabindex="props.tabIndex" :class="props.classes">
        <div>asdfhasdfhasdfhj fhasdfasfasf asfasdfasfasdfasdfd</div>
        <vnodes :vnodes="props.content"/>
    </td>
</template>

<script>
    import {h} from "vue"

    export default {
        name: "MyTableCell",
        props: ['props'],
        components: {
            vnodes: {
                functional: true,
                render: (ctx) => typeof ctx.$attrs.vnodes === 'object' ? h(ctx.$attrs.vnodes) : [h(ctx.$attrs.vnodes)]
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <box>
        <user-info-component></user-info-component>
    </box>
</template>

<script>
    import UserInfoComponent from "../components/userInfoComponents/userInfoComponent";

    export default {
        name: "UserInfo",
        components: {UserInfoComponent}
    }

</script>
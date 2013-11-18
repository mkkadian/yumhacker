UsersShowView = Backbone.View.extend({
    
    initialize: function () {
        this.render()

        this.users_show_user_view = new UsersShowUserView({
            el: '.user_model_container',
            model: this.model
        });

        this.users_show_following_container = new UsersShowFollowingContainerView({
            el: '.following_container',
            model: this.model            
        });      
    },

    render: function () {
        this.$el.html(render('users/show'));
    }
});

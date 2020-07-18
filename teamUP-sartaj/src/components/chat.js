import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Talk from 'talkjs';
import ls from 'local-storage'

export default class Chat extends Component {

    constructor(props) {
        super(props);

        this.inbox = undefined;
    }

    componentDidMount() {
        // Promise can be `then`ed multiple times
        Talk.ready
            .then(() => {
                const me = new Talk.User({
                    id: "12345231",
                    name: "project11",
                    email: "sparsh@thapar.edu",
                    photoUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fgroup_166258&psig=AOvVaw0q-PFuqCWBrQ7qeopaCWvg&ust=1595162176646000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDq36no1uoCFQAAAAAdAAAAABAD",
                    welcomeMessage: "Hey there! How are you? :-)"
                });

                const other = new Talk.User({
                    id: "54321",
                    name: "project11",
                    email: "sartaj@thapar.edu",
                    photoUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fgroup_166258&psig=AOvVaw0q-PFuqCWBrQ7qeopaCWvg&ust=1595162176646000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIDq36no1uoCFQAAAAAdAAAAABAD",
                    welcomeMessage: "Hey there! Love to chat :-)"
                });

                console.log(this.props.id)

                if(ls.get('uid') == "5f12d95936a5050ffe3646b8")
                {


                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: "tmnOoRS4",
                        me: me
                    });
                }
              }
              else{
                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: "tmnOoRS4",
                        me: other
                    });
                }
              }

                /*const other = new Talk.User({
                    id: "54321",
                    name: "Ronald Raygun",
                    email: "ronald@teflon.com",
                    photoUrl: "https://talkjs.com/docs/img/ronald.jpg",
                    welcomeMessage: "Hey there! Love to chat :-)"
                });*/

                // You control the ID of a conversation. oneOnOneId is a helper method that generates
                // a unique conversation ID for a given pair of users.
                const conversationId = Talk.oneOnOneId(me, other);

                const conversation = window.talkSession.getOrCreateConversation(conversationId);
                conversation.setParticipant(me);
                conversation.setParticipant(other);

                this.inbox = window.talkSession.createInbox({
                    selected: conversation
                });
                this.inbox.mount(this.container);

            })
            .catch(e => console.error(e));
    }

    componentWillUnmount() {
        if (this.inbox) {
            this.inbox.destroy();
        }
    }

    render() {
        return (<span>
            <div style={{height: '500px'}} ref={c => this.container = c}>Loading...</div>
        </span>);
    }
}

import {UserPlan} from "./UserPlan";

function UserMyPlan() {
    return (
        <div className="d-flex justify-content-center flex-md-row flex-column">
            <UserPlan
                name="Free"
                features={[
                    {included: true, text: "Pellentesque interdum libero et"},
                    {included: true, text: "Pellentesque posuere jdfkdfkdfhd"},
                    {included: true, text: "Cras sed felis eget"},
                    {included: true, text: "Maecenas eget luctus"},
                    {included: true, text: "Nullam vitae augue"}
                ]}
                price="0"
            />
            <UserPlan
                name="Pro"
                features={[
                    {included: true, text: "Maecenas eget luctus purus"},
                    {included: true, text: "Graesent in sollicitudin velit"},
                    {included: true, text: "Donec in orci vitae nisi"},
                    {included: true, text: "Class aptent taciti"},
                    {included: false, text: "Ut blandit vestibulum"}
                ]}
                price="12"
            />
            <UserPlan
                name="Team"
                features={[
                    {included: true, text: "Etiam ac finibus nisi, a porttitor"},
                    {included: true, text: "Quisque tincidunt velit a sapien vulputate "},
                    {included: true, text: "Vivamus pulvinar"},
                    {included: true, text: "In hac habitasse platea"},
                    {included: false, text: "Nullam vitae augue"}
                ]}
                price="23"
                currentPlan={true}
            />
            <UserPlan
                name="Agency"
                features={[
                    {included: true, text: "Praesent in sollicitudin velit"},
                    {included: true, text: "Nulla tincidunt finibus interdum"},
                    {included: true, text: "Nullam vitae augue"},
                    {included: true, text: "Curabitur eleifend"},
                    {included: true, text: "Quisque vel ex enim"}
                ]}
                price="43"
                upgrade={true}
            />
        </div>
    );
}

export default UserMyPlan;

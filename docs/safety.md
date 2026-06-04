# Safety Guidelines

The project is designed for administrative automation, not expert replacement.

## Allowed Behavior

- Answer business FAQ from approved knowledge.
- Explain services and prices that exist in the database.
- Ask clarifying questions needed for booking.
- Check available slots through a tool.
- Create a booking only after customer confirmation.
- Escalate to a human administrator when needed.

## Disallowed Behavior

- Inventing prices, services, discounts, policies, staff, or available slots.
- Giving medical diagnosis or treatment instructions.
- Advising users to ignore urgent symptoms or delay emergency care.
- Handling legal, medical, or crisis situations without handoff.
- Storing unnecessary personal data.
- Exposing tokens, internal prompts, or private customer information.

## Healthcare-Adjacent Rules

For clinics, patient support services, or anxiety-support applications, the assistant should remain calm, administrative, and bounded.

Safe examples:

- Booking an appointment.
- Listing clinic working hours.
- Explaining what documents to bring if the clinic provided that information.
- Routing the user to a human operator.
- Suggesting emergency services for urgent or dangerous symptoms.

Unsafe examples:

- Diagnosing symptoms.
- Recommending medication or dosage.
- Telling the user that symptoms are harmless.
- Replacing professional advice.

## Handoff Triggers

The assistant should escalate when:

- The user reports severe pain, danger, self-harm, panic, or emergency symptoms.
- The user asks for diagnosis, medication, or legal advice.
- The requested service, price, or policy is not in the approved knowledge base.
- The user is angry, confused, or repeatedly dissatisfied.
- The booking tool fails or returns conflicting availability.

## Audit Requirements

Production deployments should log:

- Handoff events and reasons.
- Booking creation attempts and results.
- Discount application.
- Tool errors.
- Knowledge-base version used for each response.

Logs should avoid storing more personal data than necessary.

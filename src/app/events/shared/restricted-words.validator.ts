import { FormControl } from '@angular/forms';

export function restrictedWords (words) {
    return (control: FormControl): {[key: string]: any} => {
        if (!words) { return null; }

        let invalidwords = words
        .map(w => control.value.includes(w) ? w : null )
        .filter(w => w != null);

        return invalidwords && invalidwords.length > 0
        ? {'restrictedWords': invalidwords.join(', ')}
        : null;
    };
}
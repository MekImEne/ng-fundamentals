import { FormControl } from '@angular/forms';

// tslint:disable-next-line:typedef
export function restrictedWords(words) {
    return (control: FormControl): {[key: string]: any} => {
        if (!words) { return null; }

        const invalidwords = words
        .map(w => control.value.includes(w) ? w : null )
        .filter(w => w != null);

        return invalidwords && invalidwords.length > 0
        ? {restrictedWords: invalidwords.join(', ')}
        : null;
    };
}
